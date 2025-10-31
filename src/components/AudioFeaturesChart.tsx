import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export type FeatureDatum = {
  name: string;
  value: number; // 0 - 100
};

interface AudioFeaturesChartProps {
  data: FeatureDatum[];
  title?: string;
}

const AudioFeaturesChart: React.FC<AudioFeaturesChartProps> = ({
  data,
  title,
}) => {
  return (
    <div className="w-full">
      {title && <h3 className="text-lg font-medium mb-4">{title}</h3>}
      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            {/* subtler, dark grid */}
            <CartesianGrid stroke="#1e293b" vertical={false} />

            {/* axis text muted and smaller */}
            <XAxis
              dataKey="name"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "#334155" }}
            />
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "#334155" }}
              domain={[0, 100]}
            />

            {/* compact tooltip */}
            <Tooltip
              cursor={{ fill: "rgba(148,163,184,0.05)" }}
              contentStyle={{
                background: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                padding: "6px 10px",
              }}
              labelStyle={{ color: "#f1f5f9", fontWeight: 500 }}
              itemStyle={{ color: "#93c5fd", fontSize: "13px" }}
            />

            {/* elegant bar with hover effect */}
            <Bar
              dataKey="value"
              fill="#60a5fa"
              radius={[6, 6, 0, 0]}
              className="transition-all duration-300 hover:fill-sky-400"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AudioFeaturesChart;
