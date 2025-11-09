import type { Business, InfoKey } from '../types';

/**
 * Connects to the local Python scraping engine to fetch live business data.
 *
 * @param city - The city to search in.
 * @param category - The business category.
 * @param count - The number of business results to return.
 * @param infoOptions - The specific pieces of information requested for each business (sent for potential future use).
 * @returns A Promise that resolves with an array of Business objects from the live scrape.
 */
export async function fetchBusinessData(
  city: string,
  category: string,
  count: number,
  infoOptions: InfoKey[] // Though not used by the simple backend, it's good practice to send it.
): Promise<Business[]> {

  console.log(`Sending request to Python scraping engine...`);

  const response = await fetch('http://127.0.0.1:5000/scrape', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      city,
      category,
      count,
      infoOptions
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response from server.' }));
    throw new Error(errorData.error || `Server responded with status: ${response.status}`);
  }

  const data: Business[] = await response.json();
  
  // The backend already shapes the data, but we can double-check here if needed.
  // For now, we'll just trim any extra fields the backend might have sent.
   const result = data.map(business => {
    const businessResult: Partial<Business> = { name: business.name };
    for (const key of infoOptions) {
        // Only include the requested fields in the final result.
        if (key in business && business[key as keyof Business]) {
            (businessResult as any)[key] = business[key as keyof Business];
        }
    }
     // Always include name
    if(!businessResult.name) businessResult.name = business.name;

    return businessResult as Business;
  });


  console.log(`Received ${data.length} results from Python engine.`);
  return result;
}
