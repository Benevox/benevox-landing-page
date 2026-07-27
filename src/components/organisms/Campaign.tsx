import { Button } from "@/components/atoms/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import campaignImage from "@/assets/benevox_campaign_image.jpg";

export const Campaign = () => {
  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-sm font-medium text-brand-green">
              Ongoing Campaign
            </span>
          </div>
        </div>

        {/* Content Card */}
        <div className="max-w-7xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              {/* Title */}
              <h2 className="text-[24px] md:text-[32px] font-bold leading-[150%] dark:text-white mb-6">
                MED - SITE CAMPAIGN
              </h2>

              {/* Description */}
              <div className="space-y-4 mb-8">
                <p className="text-[24px] md:text-2xl text-muted-foreground font-normal leading-[150%]">
                  We build modern, secure, patient-friendly websites for medical
                  centers across Nigeria. In 14 days, your practice goes from
                  invisible to findable. From outdated to trusted.
                </p>
                <p className="text-[24px] font-normal leading-[150%] md:text-2xl text-muted-foreground">
                  No complexity. No delays. No chasing developers.
                </p>
              </div>

              {/* Button */}
              <div>
                <Button
                  asChild
                  className="w-full sm:w-[280px] bg-[#0EA900] hover:bg-[#0EA900]/90 text-white rounded-2xl text-base font-semibold transition-all duration-300 h-auto py-4 px-10"
                >
                  <Link to="/campaign">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-auto">
              <img
                src={campaignImage}
                alt="Medical professional working on computer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
