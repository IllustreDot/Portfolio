import { useTranslation } from "react-i18next";
import { Film, Gamepad2, Music2, Radio } from "lucide-react";

const interests = [
  {
    key: "mmorpg",
    icon: <Gamepad2 className="w-6 h-6 text-green-500" />,
  },
  {
    key: "music",
    icon: <Music2 className="w-6 h-6 text-pink-500" />,
  },
  {
    key: "undergroundMusic",
    icon: <Radio className="w-6 h-6 text-purple-500" />,
  },
  {
    key: "animation",
    icon: <Film className="w-6 h-6 text-blue-500" />,
  },
];

const InterestBox = ({ icon, label }) => (
  <div className="space-x-4 p-4 rounded-2xl shadow-md flex flex-col items-center justify-center dark:text-black dark:bg-white bg-gray-800 text-white text-center transition-transform transform hover:scale-105
     box-shadow hover:shadow-lg hover:shadow-gray-500/50 dark:hover:shadow-gray-300/50 hover:rotate-2">
    {icon}
    <span className="text-base font-medium">{label}</span>
  </div>
);

const Interests = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">{t("about.interestsTitle")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {interests.map(({ key, icon }) => (
          <InterestBox key={key} icon={icon} label={t(`about.interests.${key}`)} />
        ))}
      </div>
    </div>
  );
};

export default Interests;
