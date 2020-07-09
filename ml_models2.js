
w = 2000
h = 2000

#w = 4200
#h = 2400

number_of_people = 500

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
    ellipse(self.x,self.y,100,100)
    
    
class Person(Ball):
    global people, number_of_people
    
    def __init__(self,id_,x_,y_,vx_,vy_,status_):
        super(Person,self).__init__(x_,y_,vx_,vy_)
        self.id = id_
        self.status = status_
        
    def display(self):
        if self.status=="unexposed":
            fill(127)
        elif self.status=="infected":
            fill(255,0,0)
        ellipse(self.x,self.y,10,10)
        
    def collide(self):
        for i in range(self.id+1, number_of_people):
            dx = self.x - people[i].x
            dy = self.y - people[i].y
            dist_squared = dx*dx + dy*dy
            if dist_squared < 200:
                print("collision",self.id,i)
                if self.status=="infected" and people[i].status=="unexposed":
                    people[i].status="infected"
                elif self.status=="unexposed" and people[i].status=="infected":
                    self.status = "infected"


people=[]
#people=[(Person(101,random(w),random(h),random(-10,10),random(-10,10), "infected"))]
for i in range(number_of_people):
    people.append(Person(i,random(w),random(h),random(-10,10),random(-10,10), "unexposed"))
people[0].status="infected"

def setup():
  global w,h
  size(w,h)
  background(32)
  noStroke()
  
def draw():
    background(32)
#    ellipse(200,200,10,10)
    for i in range(number_of_people):
        people[i].move()

        people[i].collide()
        people[i].display()
        
        
        
        
## using Miles Barry's starting point to fiddle with modelling
