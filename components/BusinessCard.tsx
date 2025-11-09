
import React from 'react';
import type { Business } from '../types';
import { AddressIcon, PhoneIcon, GlobeIcon, StarIcon, UsersIcon, ClockIcon } from './icons';

interface BusinessCardProps {
  business: Business;
}

const InfoItem: React.FC<{ icon: React.ReactNode; children: React.ReactNode; href?: string }> = ({ icon, children, href }) => {
  if (!children) return null;

  const content = (
    <div className="flex items-center gap-3 text-sm text-gray-300">
      <span className="text-gray-500">{icon}</span>
      <span>{children}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

export const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700 hover:border-cyan-500 transition-all duration-300">
      <h3 className="text-xl font-bold text-cyan-400 mb-4">{business.name}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        <InfoItem icon={<AddressIcon className="h-5 w-5" />}>{business.address}</InfoItem>
        
        <InfoItem icon={<PhoneIcon className="h-5 w-5" />} href={`tel:${business.phone}`}>{business.phone}</InfoItem>
        
        <InfoItem icon={<GlobeIcon className="h-5 w-5" />} href={business.website && !business.website.startsWith('http') ? `//${business.website}` : business.website}>
            {business.website}
        </InfoItem>

        <div className="flex items-center gap-6">
            {business.rating && (
                <InfoItem icon={<StarIcon className="h-5 w-5 text-yellow-400" />}>
                    <span className="font-semibold">{business.rating}</span>
                </InfoItem>
            )}
            {business.reviewCount && (
                <InfoItem icon={<UsersIcon className="h-5 w-5" />}>
                    {business.reviewCount} reviews
                </InfoItem>
            )}
        </div>
        
        {business.operatingHours && (
            <div className="sm:col-span-2">
                <InfoItem icon={<ClockIcon className="h-5 w-5" />}>
                   {business.operatingHours}
                </InfoItem>
            </div>
        )}
      </div>
    </div>
  );
};
