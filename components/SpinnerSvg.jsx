import Image from "next/image";

const SpinnerSvg = () => {
  return (
    <div className="user">
      <img src={"/profile.webp"} />
      <svg height="62" width="62" viewBox="0 0 56 56" className="spinner">
        <path
          d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z"
          className="text-team-yellow"
          fill="#ffd644"
        ></path>
        <path
          d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z"
          className="text-team-blue"
          fill="#36a3ff"
        ></path>
        <path
          d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z"
          className="text-team-red"
          fill="#ff4545"
        ></path>
      </svg>
    </div>
  );
};

export default SpinnerSvg;
