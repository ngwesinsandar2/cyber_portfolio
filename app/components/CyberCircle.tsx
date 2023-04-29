import Image from "next/image";
import cyber_circle from "../../public/assets/images/cyber_circle_one.svg";
import kurumi_lr from "../../public/assets/images/kurumi_two.jpg";

const CyberCircle = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={cyber_circle}
          alt="Kim Da-mi First Image"
          width={350}
          height={350}
          className='animate-[spin_30s_linear_infinite]'
        />

        <div className="w-[325px] h-[325px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <Image
            src={cyber_circle}
            alt="Kim Da-mi First Image"
            width={325}
            height={325}
            className='animate-[spin_30s_linear_infinite_reverse]'
          />
        </div>

        <div className="w-[300px] h-[300px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <Image
            src={kurumi_lr}
            alt="Kim Da-mi First Image"
            width={300}
            height={300}
            className='rounded-full'
          />
        </div>
      </div>
    </>
  );
}

export default CyberCircle;