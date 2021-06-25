import React from "react";
import FrameCollapsable from "./FrameCollapsable";
import SingleSeparator from "./SingleSeparator";

// Ref: OpenAcademy
class CourseMap extends React.Component {
  constructor() {
    super();
    this.state = {
      col_0: true,
    };
  }

  render() {
    return (
      <>
        <SingleSeparator
          title={"Course Content"}
          currentSection={0}
          active={this.state.col_0}
          onClick={() => {
            this.setState({ col_0: !this.state.col_0 });
          }}
        />
        <FrameCollapsable active={this.state.col_0} />
      </>
    )
  }
}

export default CourseMap;
