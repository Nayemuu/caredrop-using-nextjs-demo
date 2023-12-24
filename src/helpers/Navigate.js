"use client";
import Link from "next/link";
import React from "react";

function Navigate({ children, href }) {
  return <Link href={href}>{children}</Link>;
}

export default Navigate;
