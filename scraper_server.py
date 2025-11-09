from flask import Flask, request, jsonify
from flask_cors import CORS
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import time
import json

app = Flask(__name__)
# Allow requests from your frontend
CORS(app, resources={r"/scrape": {"origins": "*"}})

def parse_business_data(html, count):
    """Parses the HTML content to extract business data."""
    soup = BeautifulSoup(html, 'html.parser')
    businesses = []
    
    # This selector targets the main container for Google's local business results
    # It might need adjustment if Google changes their page structure.
    results_container = soup.select('div[data-local-results-container]')
    
    if not results_container:
        print("Could not find the main results container.")
        return []

    # This selector targets each individual business card within the container
    for result in results_container[0].select('div[jscontroller]'):
        if len(businesses) >= count:
            break

        data = {}
        
        name_element = result.select_one('div[role="heading"]')
        data['name'] = name_element.text.strip() if name_element else 'N/A'

        # Extract rating and review count
        rating_span = result.select_one('span[aria-label*="Rated"]')
        if rating_span:
            rating_text = rating_span['aria-label']
            parts = rating_text.replace('Rated', '').strip().split('stars out of 5,')
            data['rating'] = parts[0].strip() if len(parts) > 0 else 'N/A'
            data['reviewCount'] = parts[1].replace('reviews','').strip() if len(parts) > 1 else 'N/A'
        else:
            data['rating'] = 'N/A'
            data['reviewCount'] = 'N/A'

        # Extract other details. Google nests these in a generic div.
        details_div = result.find_all('div', recursive=False)[-1]
        details_text = [div.text for div in details_div.find_all('div', recursive=False)]
        
        # This logic is based on the typical order of info in Google's results
        if len(details_text) > 0:
            # Often, address or category is first
            # This part is heuristic and might need adjustment
            if any(char.isdigit() for char in details_text[-1]):
                 data['address'] = details_text[-1]

        # Since phone and website are not always available on the main search page,
        # we are initializing them. A more advanced scraper would click each result.
        data['phone'] = 'N/A'
        data['website'] = 'N/A'
        data['operatingHours'] = 'N/A'
        
        # A basic check to ensure it's a valid business entry
        if data['name'] != 'N/A' and data['rating'] != 'N/A':
            businesses.append(data)

    return businesses

@app.route('/scrape', methods=['POST'])
def scrape():
    """The main endpoint to handle scraping requests."""
    print("Received scrape request...")
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid JSON payload"}), 400

    city = data.get('city')
    category = data.get('category')
    count = data.get('count', 10)

    if not city or not category:
        return jsonify({"error": "Missing 'city' or 'category' parameters"}), 400

    query = f"{category} in {city}"
    print(f"Executing search for: {query}")

    # --- Selenium WebDriver Setup ---
    options = Options()
    options.add_argument("--headless")  # Run browser in the background
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")

    try:
        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=options)
        
        url = f"https://www.google.com/search?q={query.replace(' ', '+')}"
        driver.get(url)

        # Wait for the results container to be present on the page
        WebDriverWait(driver, 15).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "div[data-local-results-container]"))
        )
        
        print("Page loaded and results container found.")
        
        # Let dynamic content load
        time.sleep(2)

        # Get page source and pass it to BeautifulSoup
        html = driver.page_source
        scraped_data = parse_business_data(html, count)

        print(f"Successfully scraped {len(scraped_data)} businesses.")
        return jsonify(scraped_data)

    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": "Failed to scrape data. The website structure may have changed, or the request was blocked."}), 500
    finally:
        if 'driver' in locals():
            driver.quit()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
