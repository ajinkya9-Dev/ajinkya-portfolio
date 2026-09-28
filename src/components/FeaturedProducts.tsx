import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { ProductModal } from './ProductModal';

export const FeaturedProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProjectItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="products"
      className="relative py-24 sm:py-32 bg-[#F5F0E6] border-b border-[#1C2420]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C76B3C] mb-4">
            03 // APPSOURCE PRODUCT SUITE
          </p>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#102F27] leading-[1.08] tracking-tight">
            PRODUCTS I&apos;VE HELPED BUILD.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1C2420]/75 leading-relaxed">
            Contributed to 4 flagship ISV solutions for Microsoft Dynamics 365, all holding 5-star
            ratings on Microsoft AppSource. Alerts4Dynamics was adopted and used internally by Microsoft.
          </p>
        </div>

        {/* Large Horizontal Editorial Panels */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.products.map((product, index) => {
            const isHovered = hoveredId === product.id;

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative group bg-white/70 hover:bg-white border rounded-2xl p-6 sm:p-10 transition-all duration-300 shadow-sm hover:shadow-xl ${
                  isHovered
                    ? 'border-[#102F27] -translate-y-1'
                    : 'border-[#1C2420]/12'
                }`}
              >
                {/* Horizontal Layout Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Title, Badge, Description */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Top Badges & Index */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#89977B]">
                          PRODUCT 0{index + 1}
                        </span>
                        <span className="text-[#1C2420]/20">/</span>
                        <span className="text-xs font-semibold text-[#89977B]">
                          ★ {product.rating} on {product.ratingContext}
                        </span>

                        {product.badge && (
                          <span
                            className={`px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded ${
                              product.badge.includes('MICROSOFT')
                                ? 'bg-[#102F27] text-[#C99A4A]'
                                : 'bg-[#C76B3C] text-white'
                            }`}
                          >
                            {product.badge}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102F27] mb-2 tracking-tight">
                        {product.name}
                      </h3>

                      <p className="text-sm sm:text-base font-medium text-[#C76B3C] mb-4">
                        {product.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[#1C2420]/80 leading-relaxed mb-6">
                        {product.description}
                      </p>
                    </div>

                    {/* Features list snapshot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-[#1C2420]/10 mb-6">
                      {product.features.slice(0, 4).map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-xs text-[#1C2420]/75"
                        >
                          <span className="text-[#C76B3C] text-[10px]">■</span>
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div>
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#102F27] hover:text-[#C76B3C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C76B3C]"
                      >
                        <span>VIEW TECHNICAL BREAKDOWN</span>
                        <span className="transition-transform group-hover/btn:translate-x-1.5 text-base">
                          →
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Architecture Preview & Tech Pills */}
                  <div className="lg:col-span-5 bg-[#F5F0E6]/70 border border-[#1C2420]/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1C2420]/10">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#102F27] font-bold">
                          Stack & Architecture
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#C76B3C]" />
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {product.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-mono bg-white text-[#102F27] border border-[#102F27]/10 rounded shadow-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Statement Box */}
                    <div className="bg-[#102F27] text-white p-3.5 rounded-lg">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#C99A4A] block mb-0.5">
                        Production Impact
                      </span>
                      <p className="text-xs font-medium leading-relaxed">
                        {product.impactStatement}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Dialog */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
