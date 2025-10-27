import React from "react";
import GradualBlur from "./GradualBlur";

function Blur() {
  return (
    <>
      <section
        style={{ position: "relative", height: 500, overflow: "hidden" }}
      >
        <div
          style={{ height: "100%", overflowY: "auto", padding: "6rem 2rem" }}
        ></div>

        <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </section>
    </>
  );
}

export default Blur;
