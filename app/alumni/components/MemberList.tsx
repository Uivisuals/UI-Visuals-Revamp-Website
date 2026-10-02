"use client";

import { members } from "@/data/members";
import Card from "./Card";

export default function MemberList() {
  return (
    <>
      {members.map((member) => (
        <Card
          key={member.name}
          name={member.name}
          role={member.role}
          image={member.image}
          instagram={member.instagram}
          linkedin={member.linkedin}
        />
      ))}
    </>
  );
}
