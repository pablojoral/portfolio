import React from "react";
import tarjimlyLogo from "../assets/tarjimly-logo.png";
import sophilabsLogo from "../assets/sophilabs-logo.jpeg";
import ripioLogo from "../assets/ripio-logo.png";
import smashmoleLogo from "../assets/smashmole-logo.png";
import { getIcon } from "../utils.tsx/icons";
import Project from "../components/Project";

const Projects = () => {
  return (
    <section className="py-10 bg-black overflow-hidden" id="projects">
      <div className="flex flex-col gap-4">
        <Project
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mauris nec sapien vestibulum, eu dapibus magna efficitur. Maecenas ut gravida enim, nec hendrerit justo. Vestibulum facilisis justo et turpis cursus vestibulum. Curabitur convallis sapien eu ipsum vulputate rutrum. Sed tincidunt mauris in ex suscipit, sed tempor orci cursus. Mauris efficitur nisl in nisl ultrices, vitae dapibus nisl rutrum."
          image={tarjimlyLogo}
          orientation="left"
          icons={[
            getIcon("react"),
            getIcon("javascript"),
            getIcon("typescript"),
            getIcon("nodejs"),
            getIcon("express"),
            getIcon("python"),
            getIcon("django"),
            getIcon("aws"),
            getIcon("git"),
            getIcon("docker"),
            getIcon("postgresql"),
          ]}
        />
        <Project
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mauris nec sapien vestibulum, eu dapibus magna efficitur. Maecenas ut gravida enim, nec hendrerit justo. Vestibulum facilisis justo et turpis cursus vestibulum. Curabitur convallis sapien eu ipsum vulputate rutrum. Sed tincidunt mauris in ex suscipit, sed tempor orci cursus. Mauris efficitur nisl in nisl ultrices, vitae dapibus nisl rutrum."
          image={sophilabsLogo}
          orientation="right"
          icons={[
            getIcon("react"),
            getIcon("javascript"),
            getIcon("typescript"),
            getIcon("nodejs"),
            getIcon("python"),
            getIcon("django"),
            getIcon("csharp"),
            getIcon("dotnet"),
            getIcon("sass"),
            getIcon("git"),
          ]}
        />
        <Project
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mauris nec sapien vestibulum, eu dapibus magna efficitur. Maecenas ut gravida enim, nec hendrerit justo. Vestibulum facilisis justo et turpis cursus vestibulum. Curabitur convallis sapien eu ipsum vulputate rutrum. Sed tincidunt mauris in ex suscipit, sed tempor orci cursus. Mauris efficitur nisl in nisl ultrices, vitae dapibus nisl rutrum."
          image={ripioLogo}
          orientation="left"
          icons={[
            getIcon("python"),
            getIcon("django"),
            getIcon("git"),
            getIcon("postgresql"),
          ]}
        />
        <Project
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mauris nec sapien vestibulum, eu dapibus magna efficitur. Maecenas ut gravida enim, nec hendrerit justo. Vestibulum facilisis justo et turpis cursus vestibulum. Curabitur convallis sapien eu ipsum vulputate rutrum. Sed tincidunt mauris in ex suscipit, sed tempor orci cursus. Mauris efficitur nisl in nisl ultrices, vitae dapibus nisl rutrum."
          image={smashmoleLogo}
          orientation="right"
          icons={["devicon-unity-original", "devicon-csharp-plain"]}
        />
      </div>
    </section>
  );
};

export default Projects;
