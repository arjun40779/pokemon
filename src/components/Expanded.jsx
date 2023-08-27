import React from "react";

export const Expanded = (props) => {
  console.log(props, "debug");
  const { type, name, image, weight, height, stats } = props.pokemonData[0];
  const { setExpanded } = props;
  const close = () => {
    setExpanded(false);
  };
  const nameStat1 = stats[0].stat.name;
  const Stat1Point = stats[0].base_stat;

  const nameStat2 = stats[1].stat.name;
  const Stat2Point = stats[1].base_stat;

  const nameStat3 = stats[2].stat.name;
  const Stat3Point = stats[2].base_stat;

  const nameStat4 = stats[3].stat.name;
  const Stat4Point = stats[3].base_stat;

  const nameStat5 = stats[4].stat.name;
  const Stat5Point = stats[4].base_stat;

  const nameStat6 = stats[5].stat.name;
  const Stat6Point = stats[5].base_stat;

  console.log(image);
  return (
    <div className={`expanded-view`}>
      <button className={`close-button`} onClick={() => close(false)}>
        X
      </button>

      {/* left portion -> image  */}

      <div className="expanded-left">
        <img className="expanded-image" src={image} alt={name} />
        <h3 className="expanded-name">{name}</h3>
      </div>

      {/* Right portion  -> statistics */}
      <div className={`expanded-right ${type}`}>
        <table className={`expanded-table ${type}`}>
          <tbody>
            <tr>
              <td></td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>Weight:</td>
                      <td>{weight}</td>
                    </tr>

                    <tr>
                      <td>Height:</td>
                      <td>{height}</td>
                    </tr>
                  </tbody>
                </table>
              </td>

              <td>
                {/* stat */}

                <table>
                  <tbody>
                    <tr>
                      <td>Stat1</td>
                      <td>{nameStat1}</td>
                    </tr>
                    <tr>
                      <td>Stat2</td>
                      <td>{nameStat2}</td>
                    </tr>
                    <tr>
                      <td>Stat3</td>
                      <td>{nameStat3}</td>
                    </tr>
                    <tr>
                      <td>Stat4</td>
                      <td>{nameStat4}</td>
                    </tr>
                    <tr>
                      <td>Stat5</td>
                      <td>{nameStat5}</td>
                    </tr>
                    <tr>
                      <td>Stat6</td>
                      <td>{nameStat6}</td>
                    </tr>
                  </tbody>
                </table>
              </td>

              <td>
                {/* BS points */}

                <table>
                  <tbody>
                    <tr>
                      <td>BS1:</td>
                      <td>{Stat1Point}</td>
                    </tr>
                    <tr>
                      <td>BS2:</td>
                      <td>{Stat2Point}</td>
                    </tr>
                    <tr>
                      <td>BS3:</td>
                      <td>{Stat3Point}</td>
                    </tr>
                    <tr>
                      <td>BS4:</td>
                      <td>{Stat4Point}</td>
                    </tr>
                    <tr>
                      <td>BS5:</td>
                      <td>{Stat5Point}</td>
                    </tr>
                    <tr>
                      <td>BS6:</td>
                      <td>{Stat6Point}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Expanded;
