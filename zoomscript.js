$(function(){
	
  svg = d3.select("#svg");
  svg_group = d3.select('#outer_group');

  zoom = d3.behavior.zoom()
      .translate([0, 0])
      .scale(1)
      .scaleExtent([.5, 20])
      .on("zoom", zoomed);
      
  svg.call(zoom);
  
  function zoomed() {
   // svg_group.style("stroke-width", 1.5 / d3.event.scale + "px");
    svg_group.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    // $zoomService.$broadcast('zoom', {
    //    scale: d3.event.scale
    // });
  }
  
  
  
/*  $('.sector').click(function(){
    var bbox = this.getBBox();
	
	
    console.log('bbox = ', bbox);
    var scale = 4;
    if (!zoomed) {
      svg.transition()
        .call(zoom
              .translate([(- bbox.x - bbox.width / 2) * scale, (- bbox.y - bbox.height / 2) * scale])
              .scale(scale).event
        );
		
    } else {
      svg.transition().call(zoom.translate([0, 0]).scale(1).event);
    }
	
    zoomed = !zoomed;
  });*/
  
});