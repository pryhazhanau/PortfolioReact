import "./ArchitecturesBlock.css";

function ArchitecturesBlock() {
  return (
    <>
      <div className="architectures-block-wrapper">
        <div className="architecture-grid">
          <div className="architecture-col-wrapper">
            <div className="architecture-col">
              <p className="architecture-title subtitle-secondary">UDF</p>
              <p className="body-text-spacero">
                Gaining popularity,{" "}
                <span className="body-bold-aluminor">
                  Unidirectional Data Flow
                </span>{" "}
                architecture sense was migrated from the web development,
                especialy from React. I used it in the project, which based on
                the open source{" "}
                <a
                  className="link-text-img"
                  href="https://github.com/inDriver/UDF"
                  target="_blank"
                >
                  framework
                </a>{" "}
                which was developed by our team.
              </p>
            </div>
          </div>

          <div className="architecture-col-wrapper">
            <div className="architecture-col">
              <p className="architecture-title subtitle-secondary">MVVM</p>
              <p className="body-text-spacero">
                Known by all iOS Developers archetecture. Used in projects with
                different approaches.
              </p>
            </div>
          </div>

          <div>
            <div className="architecture-col">
              <p className="architecture-title subtitle-secondary">
                Clean Swift
              </p>
              <p className="body-text-spacero">
                <span className="body-bold-aluminor">Clean Swift</span> is an
                iOS architecture that organizes app code for easier management.{" "}
                <span className="body-bold-aluminor">VIPER</span>, a variation,
                enforces clear component divisions for organized development.
                Each piece inherits basic behaviors, making coding consistent
                and simple, while facilitating testing and maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArchitecturesBlock;
