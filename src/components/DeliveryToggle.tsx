
import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

const DeliveryToggle = () => {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');

  return (
    <div className="mx-4 mb-6 mt-3 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <div className="relative grid grid-cols-2">
        {/* Animated background indicator */}
        <motion.div 
          className="absolute h-full rounded-lg bg-white"
          initial={{ x: deliveryType === 'delivery' ? 0 : '100%' }}
          animate={{ x: deliveryType === 'delivery' ? 0 : '100%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: '50%' }}
        />
        
        <button
          className={`relative z-10 py-3.5 px-4 text-center font-medium transition-colors duration-200 ${
            deliveryType === 'delivery' 
              ? 'text-black' 
              : 'text-gray-500'
          }`}
          onClick={() => setDeliveryType('delivery')}
        >
          Доставка
        </button>
        
        <button
          className={`relative z-10 py-3.5 px-4 text-center font-medium transition-colors duration-200 ${
            deliveryType === 'pickup' 
              ? 'text-black' 
              : 'text-gray-500'
          }`}
          onClick={() => setDeliveryType('pickup')}
        >
          Самовывоз
        </button>
      </div>
      
      {deliveryType === 'delivery' && (
        <div className="flex items-center gap-2.5 bg-gray-50 p-3.5">
          <Icon name="MapPin" size={18} className="text-red-500 flex-shrink-0" />
          <p className="text-sm font-medium text-gray-700 truncate">улица Кулешова, 1Ак18</p>
          <Icon name="ChevronRight" size={18} className="text-gray-400 flex-shrink-0 ml-auto" />
        </div>
      )}
    </div>
  );
};

export default DeliveryToggle;
