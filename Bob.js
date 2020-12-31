class Bob
{
	constructor(x,y,r){ 
	
		
		var options={
			isStatic:false,
			restitution:1.0,
			friction:0,
			density:0.9
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y,this.r/1, options)
		World.add(world, this.body);
		
	}
	display()
	{
		
			var bobpos=this.body.position;		

			push()
			translate(bobpos.x, bobpos.y);
			ellipseMode(RADIUS);
			fill("violet")
			ellipse(0,0,this.r, this.r);
			pop()
		
			
			
	}
	
}