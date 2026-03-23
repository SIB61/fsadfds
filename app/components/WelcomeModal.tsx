import { Fragment } from "react";
import { useLoaderData } from "@remix-run/react";
import type { LoaderDataType } from "~/controls";
import TextWithLine from "./Utils/TextWithLine";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function encodeName(name: string) {
  return btoa(encodeURIComponent(name));
}

export function decodeName(encoded: string) {
  return decodeURIComponent(atob(encoded));
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  const { remark: recipient } = useLoaderData<LoaderDataType>();

  return (
    <div
      className={
        "fixed h-screen w-screen left-0 top-0 z-10 transition-all duration-1000" +
        (!isOpen ? " -translate-y-full" : "")
      }
    >
      <div className="bg-background h-screen w-screen flex flex-row justify-center items-start fixed overflow-auto py-20 box-border">
        <div className="flex flex-col items-center p-5 my-auto w-full md:w-[500]">
          <h5 className="text-center font-medium font-sans text-xl md:text-2xl mb-2 md:mb-3 text-gray-500">
            Wedding Invitation
          </h5>
          <h4 className="text-center font-head text-5xl md:text-6xl mb-6 text-gray-800">
            Sabit & Choia
          </h4>

          <div className="w-[350px] mb-12">
            {!recipient ? null : (
              <Fragment>
                <div className="mb-5">
                  <TextWithLine>To</TextWithLine>
                </div>
                <div
                  className={
                    recipient.length < 50
                      ? "text-center text-2xl font-head text-gray-700 leading-7 py-1"
                      : "text-center text-2xl font-head text-gray-700 leading-7 px-4 md:px-0"
                  }
                >
                  {decodeName(recipient)}
                </div>
              </Fragment>
            )}
          </div>

          <button
            type="button"
            className="group relative px-10 py-4 font-sans font-bold text-lg text-white rounded-full bg-gradient-to-r from-[#CE7BB0] via-[#A267AC] to-[#6867AC] shadow-[0_10px_20px_-10px_#CE7BB0] hover:shadow-[0_20px_30px_-10px_#CE7BB0] hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-out flex items-center gap-3 overflow-hidden"
            onClick={onClose}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <i className="bx bx-envelope-open text-2xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative">Open Invitation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
