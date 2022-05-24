import styles from './stats.module.scss';
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer, Label, CartesianGrid, Tooltip, Pie, PieChart, LabelList, Legend, Cell } from 'recharts';
import randomColor from 'randomcolor';

function Stats (props) {

    const linedata = props.data.map(item => ({ date: new Date(item.paymentDate).getTime(), amount: item.amount }));

    const reducer = (groupedData, item) => {
        const index = groupedData.findIndex( arrayItem => arrayItem.type === item.type );
        if (index >= 0) {
            groupedData[index].amount = groupedData[index].amount + item.amount;
        } else {
            groupedData.push({type: item.type, amount: item.amount});
        }
        return groupedData;
    }

    const piedata = props.data.reduce(reducer, []);
    const piecolors = randomColor({count: piedata.length, seed: "kulukirjanpito"});

    return (
        <div className={styles.stats}>
            <h2>Stats</h2>
            <h3>Kulut aikajanalla</h3>

            <ResponsiveContainer width={"100%"} height={360}>
              <LineChart data={linedata} margin={{ top: 20, left: 20, right: 20, bottom: 10}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" 
                        dataKey="date"
                        domain={["dataMin", "dataMax"]}
                        scale="time"
                        tickFormatter={timeStr => new Date(timeStr).toLocaleDateString("fi-FI")}
                />
                <YAxis>
                    <Label value="Summa"
                           position="left"
                           angle={-90}
                           style={{ textAnchor: "middle"}} />
                </YAxis>

                <Line dataKey="amount" name="kulut" unit="€" />
                <Tooltip labelFormatter={value => new Date(value).toLocaleDateString("fi-FI")} />
              </LineChart>
            </ResponsiveContainer>

            <h3>Kulut kulutyypeittäin</h3>

            <ResponsiveContainer width={"100%"} height={360}>
              <PieChart>
                <Pie data={piedata} dataKey="amount" nameKey="type">
                  <LabelList dataKey="amount" position="inside" />
                  { piecolors.map(color => <Cell fill={color} key={color} />) }
                </Pie>
                <Legend />
                <Tooltip formatter={value => value + " €"} />
              </PieChart>
            </ResponsiveContainer>

        </div>
    );
}

export default Stats;