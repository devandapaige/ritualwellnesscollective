import env from "react-dotenv";

function PricingTable() {
    return (
        
      <div className="pricingTable">
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table 
            pricing-table-id={env.STRIPE_PRICING_TABLE_ID}
            publishable-key={env.STRIPE_PUBLISHABLE_KEY}>
        </stripe-pricing-table>
      </div>
    );
  }
  
  export default PricingTable;