

w = 1000
h = 1000
number_of_balls = 100

class Ball(object):
  global w,h
  
  def __init__(self,x_,y_,vx_,vy_):
    self.x=x_
    self.y=y_
    self.vx=vx_
    self.vy=vy_

  def move(self):
    if self.x < 0 or self.x > w:
      self.vx *= -1
    if self.y <0 or self.y > h:
      self.vy *= -1
    self.x += self.vx
    self.y += self.vy
  
  def display(self):
    fill(127)
    ellipse(self.x,self.y,10,10)
    
    


balls=[]
for i in range(number_of_balls):
    balls.append(Ball(random(w),random(h),random(-10,10),random(-10,10)))




def setup():
  global w,h
  size(w,h)
  background(32)
  noStroke()
  
def draw():
    background(32)
#    ellipse(200,200,10,10)
    for i in range(number_of_balls):
        balls[i].move()
        balls[i].display()
        
        
        
