"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

const CircumferenceChart = ({ value }) => {
  const ref = useRef();

  useEffect(() => {
    const width = 694;
    const height = 411;
    const margin = 2;
    const radius = Math.min(width, height) / 2 - margin;

    const data = { value: value, min: 0, max: 100 };

    const svg = d3
      .select(ref.current)
      .attr("viewBox", `0 0 ${width} ${height}`);

    svg.selectAll("*").remove();

    const gauge = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2 + 90})`);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.6)
      .outerRadius(radius * 1)
      .padAngle(0.02);

    const pie = d3
      .pie()
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2)
      .value((d) => d)
      .sort(null);

    const color = d3
      .scaleOrdinal()
      .domain([0, 1])
      .range(["#387F40", "#AD312A"]);

    const arcData = pie([1, 1]);

    const arcs = gauge
      .selectAll("path")
      .data(arcData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));

    // Adding descriptive labels outside each pie slice
    const descriptions = ["Normal", "Abdominal Obesity"];
    gauge
      .selectAll("text.description")
      .data(arcData)
      .enter()
      .append("text")
      .attr("class", "description")
      .attr("transform", (d, i) => {
        const [x, y] = arc.centroid(d);
        const offset = radius * 0.4;
        return `translate(${x * 1.7}, ${y * 1.4})`;
      })
      .attr("text-anchor", "middle")
      .style("font-size", "15px")
      .style("font-weight", "700")
      .style("fill", "#000")
      .text((d, i) => {
        if (i === 0) return "Normal";
        if (i === 1) return "Abdominal Obesity";
        return "";
      });

    const needlePath = d3.path();
    needlePath.moveTo(0, -radius * 0.9);
    needlePath.lineTo(5, 0);
    needlePath.lineTo(-5, 0);
    needlePath.closePath();

    gauge
      .append("path")
      .attr("d", needlePath)
      .attr("fill", "black")
      .attr("transform", `rotate(${(value / 100) * 180 - 90})`);

    gauge
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 15)
      .attr("fill", "#E9ECF3");

    gauge
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", radius / 3)
      .text(`Waist Circumference = ${value}`)
      .style("fill", "#000000")
      .style("font-size", "37px")
      .style("font-weight", "700");
  }, [value]);

  return (
    <div className="w-full max-w-[601px] mx-auto ">
      <svg ref={ref}></svg>
    </div>
  );
};

export default CircumferenceChart;
