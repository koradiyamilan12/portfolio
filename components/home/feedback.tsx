import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/marquee";
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/components/ui/testimonial";
import { feedbackData } from "@/data/feedback";

import { Separator } from "../ui/separator";

export default function Feedback() {
  return (
    <section className="mx-auto mt-8 max-w-3xl px-4">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk text-3xl font-bold">Feedback</h1>
      </div>

      <div className="bg-card w-full">
        <Marquee className="[&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!">
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />

          <MarqueeContent speed={40}>
            {feedbackData.map((item, i) => (
              <MarqueeItem
                key={i}
                className="border-line mx-0 h-full w-xs border-r"
              >
                <div className="hover:bg-accent/20 block h-full transition-[background-color] ease-out">
                  <Testimonial>
                    <TestimonialQuote>
                      <p>{item.quote}</p>
                    </TestimonialQuote>

                    <TestimonialAuthor>
                      <TestimonialAvatar>
                        <TestimonialAvatarImg src={item.authorAvatar} />
                        <TestimonialAvatarRing />
                      </TestimonialAvatar>

                      <TestimonialAuthorName>
                        {item.authorName}
                      </TestimonialAuthorName>

                      <TestimonialAuthorTagline>
                        {item.authorTagline}
                      </TestimonialAuthorTagline>
                    </TestimonialAuthor>
                  </Testimonial>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
}
