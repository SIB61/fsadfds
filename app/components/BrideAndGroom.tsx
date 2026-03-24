import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/ami-img.jpg";
import groom from "~/images/fauzi-img.jpg";

const BrideAndGroom = () => {
  return (
    <div className="pt-20 pb-4">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-700 mb-6">
        The Happy Couple
      </h3>
      <div className="w-full flex flex-wrap pb-20">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={bride}
              alt="bride"
              className="w-48 h-48 rounded-full mb-8"
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Dr. Sagufta Tasnim Choia
            </h3>
            <div className="mb-4">
              <TextWithLine>The Bride</TextWithLine>
            </div>
            <p className="font-sans text-gray-500 leading-6">
              Daughter of <strong>Md. Giash Uddin</strong> and{" "}
              <strong>Sajeda Begum</strong>.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={groom}
                alt="groom"
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
                Eng. Md. Sabit Islam Bhuiya
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>The Groom</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
                Son of <strong>Nazrul Islam Bhuiya</strong> and{" "}
                <strong>Lutfun Nessa</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
