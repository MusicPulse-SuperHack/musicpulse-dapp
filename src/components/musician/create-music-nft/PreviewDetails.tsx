import React from "react";

function PreviewDetails({ setStep, step }: any) {
  return (
    <div className="w-full px-12">
      <h3 className="block text-[32px] text-[#1F1F1F] leading-[24px]">Name</h3>
      <p className="rounded-md  mt-4">Shroom Night</p>

      <h3 className="block text-[32px] text-[#1F1F1F] leading-[24px] mt-8">
        Description
      </h3>
      <p className="rounded-md  mt-4">
        These access tokens will be automatically listed for sale on the
        Agent-verse marketplace. An access token gives the buyer the right to
        immediately generate an API key for the fine-tuned model you’ve just
        created. The API key is valid until the subscription period ends. Once a
        time-bound access token expires, the API key will be de-activated.
      </p>

      <p className="rounded-md  mt-4">
        The price for each type of subscription is pre-set at the moment. As a
        model creator, you will be able to customize the prices in the near
        future when these features are released.
      </p>
    </div>
  );
}

export default PreviewDetails;
