// write your javascript code here.
// feel free to change the preset attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

let svg = d3.select('#vis1')
  .append("svg")
  .attr("preserveAspectRatio", "xMidYMid meet") // this will scale your visualization according to the size of the page.
  .style('background-color', '#ccc') // change the background color to white
  .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

text = svg.append('text')
  .attr('x', '30%')
  .attr('y', '35%')
  .attr('text-anchor', 'middle')
  .text('A')

text = svg.append('text')
  .attr('x', '70%')
  .attr('y', '35%')
  .attr('text-anchor', 'middle')
  .text('B')

rect = svg.append('rect')
  .attr('x', '20%')
  .attr('y', '40%')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', 'yellow')

circle = svg.append('circle')
  .attr('cx', '70%')
  .attr('cy', '50%')
  .attr('r', '10%')
  .attr('fill', 'blue')
