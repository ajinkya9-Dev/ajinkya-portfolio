import React, { useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';

interface ProductModalProps {
  product: ProjectItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#102F27]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#F5F0E6] border border-[#102F27]/20 rounded-2xl p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#102F27] hover:bg-[#102F27]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C76B3C] transition-colors"
          aria-label="Close dialog"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#1C2420]/15 pb-6 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            {product.badge && (
              <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold bg-[#C76B3C] text-white rounded">
                {product.badge}
              </span>
            )}
            <span className="text-xs font-bold text-[#89977B] uppercase tracking-wider">
              {product.rating} • {product.ratingContext}
            </span>
          </div>
          <h3 id="modal-product-title" className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#102F27]">
            {product.name}
          </h3>
          <p className="text-sm sm:text-base text-[#1C2420]/80 mt-1 font-medium">
            {product.subtitle}
          </p>
        </div>

        {/* Solution Overview */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C76B3C] font-bold mb-2">
              Product Overview & Scope
            </h4>
            <p className="text-sm sm:text-base text-[#1C2420]/85 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Architecture Points */}
          <div className="bg-white/70 border border-[#1C2420]/10 rounded-xl p-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#102F27] font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#102F27]" />
              Engineering & Architecture Highlights
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#1C2420]/85">
              {product.architecturePoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-[#C76B3C] font-bold">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Feature Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#102F27] font-bold mb-3">
              Core Platform Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat) => (
                <div
                  key={feat}
                  className="bg-white/60 border border-[#1C2420]/10 p-3 rounded-lg text-xs font-medium text-[#102F27]"
                >
                  ✓ {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#102F27] font-bold mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-[#102F27] text-[#F5F0E6] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <div className="p-4 bg-[#163D32] text-[#F5F0E6] rounded-xl flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C99A4A] block">
                Engineering Impact
              </span>
              <p className="text-xs sm:text-sm font-semibold">
                {product.impactStatement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
