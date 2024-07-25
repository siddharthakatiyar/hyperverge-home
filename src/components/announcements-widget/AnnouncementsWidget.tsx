import React from 'react';
import Marquee from 'react-marquee-slider';
import { v4 as uuidv4 } from 'uuid';

const announcements = [
  "• Welcome to the HyperVerge home page!",
  "• Don't forget to submit your daily report.",
  "• Team meeting at 3 PM today.",
  "• Check out the new features in the Pomodoro timer.",
  "• Upcoming event: HyperVerge Hackathon on Aug 10th.",
  "• Remember to review the new project guidelines.",
  "• Happy Birthday to Madhav!",
];

const AnnouncementsWidget: React.FC = () => {
  return (
    <div className="p-4 bg-blue-100 shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
      <div className="h-12 overflow-hidden relative">
      <Marquee velocity={25} resetAfterTries={200} scatterRandomly={false} direction="ltr" onInit={() => {}}
    onFinish={() => {}}>
          {announcements.map((announcement) => (
            <div
              key={uuidv4()}
              className="mx-4 text-lg font-medium text-blue-900 whitespace-nowrap"
            >
              {announcement}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AnnouncementsWidget;
