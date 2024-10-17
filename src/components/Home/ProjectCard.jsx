import React from "react";

export default function ProjectCard() {
  return (
    <div className="card lg:card-side h-96 lg:h-64 bg-base-100 shadow-xl">
      <figure>
        <img
          src="homelab.jpg"
          alt="Album"
        //   className="w-full lg:h-full"
          className="size-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">HomeLab</h2>
        <p>Created my very own homelab using proxmox with other open source tools</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" disabled="disabled">See more...</button>
        </div>
      </div>
    </div>
  );
}
