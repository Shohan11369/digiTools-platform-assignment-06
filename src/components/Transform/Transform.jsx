import React from "react";

const Transform = () => {
  return (
    <div className="p-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
      <div className="container mx-auto text-center space-y-4 p-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Ready to Transform Your Workflow?</h2>
          <p>
            Join thousands of professionals who are already using Digi tools to
            work smarter.Start your free trial today.
          </p>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <button className="btn rounded-2xl">Explore Products</button>
          <button className="bg-transparent rounded-2xl border p-2">View Pricing</button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Transform;
