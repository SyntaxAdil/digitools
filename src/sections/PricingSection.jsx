import React, { Suspense, use } from "react";
import Header from "./../components/header/Header";
import { PricingCard } from "../components/ui/PricingCard";

const PricingGrid = ({ planData }) => {
  const product = use(planData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {product.plans.map((p) => (
        <PricingCard product={p} key={p.tagline} />
      ))}
    </div>
  );
};

const PricingSection = ({ planData }) => {
  return (
    <section className="pb-20" >
      <Header
        fsTitle="text-3xl md:text-4xl"
        title={"Simple, Transparent Pricing"}
        subtitle={
          "Choose the plan that fits your needs. Upgrade or downgrade anytime."
        }
      />

      <Suspense fallback={<p>Loading</p>}>
        <PricingGrid planData={planData} />
      </Suspense>
    </section>
  );
};

export default PricingSection;
