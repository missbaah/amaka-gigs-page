import React from "react";
import { PrimaryBtn } from "./PrimaryBtn";
import Image from "next/image";
import verify from "../../../public/icons/verify.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type AboutCardProps = {
  name: string;
  imageSrc: string | StaticImport;
  children: React.ReactNode;
  userName: string;
  subscribers: string;
  posts: number;
  brief: string;
};

const AboutCard = (props: AboutCardProps) => {
  return (
    <section className="h-auto p-3 border border-amaka-grey-border r-10">
      <h2 className="text-xl font-medium">About the creator</h2>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium flex gap-2 py-4">
            <Image
              src={props.imageSrc}
              height={40}
              width={40}
              alt="avatar"
              className="rounded-full"
            />
            <div className="flex gap-1 items-center">
              <span>{props.name}</span>
              <Image src={verify} alt="icon" />
            </div>
          </div>
          <PrimaryBtn width="w-auto">Subscribe</PrimaryBtn>
        </div>
        <div className="text-sm text-amaka-grey flex flex-col gap-3">
          <p>
            @{props.userName} · {props.subscribers} subscribers · {props.posts}{" "}
            posts
          </p>
          <p>{props.brief}</p>
        </div>
      </section>

      {props.children}
    </section>
  );
};

export default AboutCard;
