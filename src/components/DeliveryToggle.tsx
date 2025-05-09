
import React, { useState } from 'react';
import Icon from '@/components/ui/icon';

const DeliveryToggle = () => {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');

  return (
    <div className="mx-4 mb-4 mt-2 overflow-hidden rounded-lg border border-gray-200">
      <div className="grid grid-cols-2">
        <button
          className={`py-3 px-4 text-center font-medium ${
            deliveryType === 'delivery' 
              ? 'bg-white text-black' 
              : 'bg-gray-100 text-gray-500'
          }`}
          onClick={() => setDeliveryType('delivery')}
        >
          Доставка
        </button>
        
        <button
          className={`py-3 px-4 text-center font-medium ${
            deliveryType === 'pickup' 
              ? 'bg-white text-black' 
              : 'bg-gray-100 text-gray-500'
          }`}
          onClick={() => setDeliveryType('pickup')}
        >
          Самовывоз
        </button>
      </div>
      
      {deliveryType === 'delivery' && (
        <div className="flex items-center gap-2 bg-gray-100 p-3">
          <Icon name="MapPin" size={18} className="text-black flex-shrink-0" />
          <p className="text-sm text-gray-700 truncate">улица Кулешова, 1Ак18</p>
        </div>
      )}
    </div>
  );
};

export default DeliveryToggle;
