import React from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import { changeBlock } from "./actions";

const GranSynth = ({ blockInfo, changeBlock }) => {
  let {
    id,
    rate,
    ioi_jitter,
    dur,
    pitch_shift,
    pitch_jitter,
    reverse,
    pan,
    pan_jitter,
    delay,
    delay_jitter
  } = blockInfo;
  return (
    <React.Fragment>
      <div
        className=""
        style={{ width: "288px", height: "221px", position: "relative" }}
      >
        <ReactTooltip place="top" type="info" effect="float" />
        {/* Rate */}
        <label
          htmlFor="rate"
          data-tip="Grain Rate: expected number of grains to be played per second. range: [1, 1000]"
          className="tooltip-on-hover"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "4px",
            left: "6px"
          }}
        >
          {"Grain Rate: "}
        </label>
        <input
          className="slider"
          type="range"
          style={{
            width: "200px",
            position: "absolute",
            top: "6px",
            left: "80px"
          }}
          onChange={e => changeBlock(id, "rate", e.target.value)}
          min={0}
          max={1000}
          value={rate}
          id="rate"
        />
        <label
          htmlFor="rate"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "4px",
            left: "285px"
          }}
        >
          {rate}
        </label>

        {/* ioi_jitter */}
        <label
          htmlFor="ioi_jitter"
          data-tip="specifies jitter in grain scheduling. range: [0, 1]"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "24px",
            left: "6px"
          }}
        >
          {"Timing Jitter: "}
        </label>
        <input
          className="slider"
          type="range"
          style={{
            width: "200px",
            position: "absolute",
            top: "26px",
            left: "80px"
          }}
          onChange={e => changeBlock(id, "ioi_jitter", e.target.value)}
          min={0}
          max={1}
          step={0.01}
          value={ioi_jitter}
          id="ioi_jitter"
        />
        <label
          htmlFor="ioi_jitter"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "24px",
            left: "285px"
          }}
        >
          {ioi_jitter}
        </label>

        {/* dur */}
        <label
          htmlFor="dur"
          data-tip="duration of each grain in seconds. range: [0.01, 1]"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "44px",
            left: "6px"
          }}
        >
          {"Duration: "}
        </label>
        <input
          className="slider"
          type="range"
          style={{
            width: "200px",
            position: "absolute",
            top: "46px",
            left: "80px"
          }}
          onChange={e => changeBlock(id, "dur", e.target.value)}
          min={0.01}
          max={1}
          step={0.01}
          value={dur}
          id="dur"
        />
        <label
          htmlFor="dur"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "44px",
            left: "285px"
          }}
        >
          {dur}
        </label>

        {/* pitch_shift */}
        <label
          htmlFor="pitch_shift"
          data-tip="specifies by how much to transpose a grain in cents. range: [-2400, 2400]"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "64px",
            left: "6px"
          }}
        >
          {"Transpose: "}
        </label>
        <input
          className="slider"
          type="range"
          style={{
            width: "200px",
            position: "absolute",
            top: "66px",
            left: "80px"
          }}
          onChange={e => changeBlock(id, "pitch_shift", e.target.value)}
          min={-2400}
          max={2400}
          value={pitch_shift}
          id="pitch_shift"
        />
        <label
          htmlFor="pitch_shift"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "64px",
            left: "285px"
          }}
        >
          {pitch_shift}
        </label>

        {/* pitch_jitter */}
        <label
          htmlFor="pitch_jitter"
          data-tip="specifies a range of random pitch shift offset in cents. range: [0, 4800]"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "84px",
            left: "6px"
          }}
        >
          {"Transp. Jitter: "}
        </label>
        <input
          className="slider"
          type="range"
          style={{
            width: "200px",
            position: "absolute",
            top: "86px",
            left: "80px"
          }}
          onChange={e => changeBlock(id, "pitch_jitter", e.target.value)}
          min={0}
          max={4800}
          value={pitch_jitter}
          id="pitch_jitter"
        />
        <label
          htmlFor="pitch_jitter"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "84px",
            left: "285px"
          }}
        >
          {pitch_jitter}
        </label>

        {/* reverse */}
        <label
          htmlFor="reverse"
          data-tip="probability of reversing a grain during playback. range: [0, 1]"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "104px",
            left: "6px"
          }}
        >
          {"Reverse: "}
        </label>
        <input
          className="slider"
          type="range"
          style={{
            width: "200px",
            position: "absolute",
            top: "106px",
            left: "80px"
          }}
          onChange={e => changeBlock(id, "reverse", e.target.value)}
          min={0}
          max={1}
          step={0.01}
          value={reverse}
          id="reverse"
        />
        <label
          htmlFor="reverse"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "104px",
            left: "285px"
          }}
        >
          {reverse}
        </label>

        {/* pan */}
        <label
          htmlFor="pan"
          data-tip="pan amount during grain playback. range: [-1, 1]"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "124px",
            left: "6px"
          }}
        >
          {"Pan: "}
        </label>
        <input
          className="slider"
          type="range"
          style={{
            width: "200px",
            position: "absolute",
            top: "126px",
            left: "80px"
          }}
          onChange={e => changeBlock(id, "pan", e.target.value)}
          min={-1}
          max={1}
          step={0.01}
          value={pan}
          id="pan"
        />
        <label
          htmlFor="pan"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "124px",
            left: "285px"
          }}
        >
          {pan}
        </label>

        {/* pan_jitter */}
        <label
          htmlFor="pan_jitter"
          data-tip="specifies a range of random offset added to pan amount for each grain. range: [0, 2]"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "144px",
            left: "6px"
          }}
        >
          {"Pan Jitter: "}
        </label>
        <input
          className="slider"
          type="range"
          style={{
            width: "200px",
            position: "absolute",
            top: "146px",
            left: "80px"
          }}
          onChange={e => changeBlock(id, "pan_jitter", e.target.value)}
          min={0}
          max={2}
          step={0.01}
          value={pan_jitter}
          id="pan_jitter"
        />
        <label
          htmlFor="pan_jitter"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "144px",
            left: "285px"
          }}
        >
          {pan_jitter}
        </label>

        {/* delay */}
        <label
          htmlFor="delay"
          data-tip="specfies the amount of delay in seconds from input to output. range: [0, 20]"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "164px",
            left: "6px"
          }}
        >
          {"Delay: "}
        </label>
        <input
          className="slider"
          type="range"
          style={{
            width: "200px",
            position: "absolute",
            top: "166px",
            left: "80px"
          }}
          onChange={e => changeBlock(id, "delay", e.target.value)}
          min={0}
          max={20}
          step={0.1}
          value={delay}
          id="delay"
        />
        <label
          htmlFor="delay"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "164px",
            left: "285px"
          }}
        >
          {delay}
        </label>

        {/* delay_jitter */}
        <label
          htmlFor="delay_jitter"
          data-tip="specifies the spread in seconds around delay grains. range: [0, 20]"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "184px",
            left: "6px"
          }}
        >
          {"Delay Jitter: "}
        </label>
        <input
          className="slider"
          type="range"
          style={{
            width: "200px",
            position: "absolute",
            top: "186px",
            left: "80px"
          }}
          onChange={e => changeBlock(id, "delay_jitter", e.target.value)}
          min={0}
          max={20}
          step={0.1}
          value={delay_jitter}
          id="delay_jitter"
        />
        <label
          htmlFor="delay_jitter"
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "184px",
            left: "285px"
          }}
        >
          {delay_jitter}
        </label>
      </div>

      {/* Footer */}
      <div
        className="text-center"
        style={{ backgroundColor: "grey", height: "30px" }}
      >
        <span className="col text-center">
          <label htmlFor="osc" style={{ fontSize: "0.8rem" }}>
            OSC
          </label>
          <input
            type="checkbox"
            className="m-1"
            id="osc"
            onClick={() => changeBlock(id, "osc", undefined)}
          />
        </span>
        <span className="col text-center">
          <label htmlFor="oscPort" style={{ fontSize: "0.8rem" }}>
            OSC port:
          </label>
          <input
            type="text"
            className="my-1"
            style={{ height: "1.5rem", width: "3rem" }}
            id="oscPort"
            onChange={e => changeBlock(id, "oscPort", e.target.value)}
          />
        </span>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(
  mapStateToProps,
  { changeBlock }
)(GranSynth);
