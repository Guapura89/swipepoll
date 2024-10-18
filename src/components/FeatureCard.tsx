import { FeatureCardProps } from "@/app/interfaces/featureCard.interface";

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="card bg-slate-200 flex flex-row p-6 items-center justify-around h-full gap-4">
      <div className="grid place-items-center bg-dark rounded-lg w-20 h-16 aspect-square">
        
      </div>
      <div className="text-left">
        <p className="font-bold">{title}</p>
        <p>{description}</p> 
      </div>
    </div>
  );
}