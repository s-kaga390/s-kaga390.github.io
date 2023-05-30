class mainClass
{
  public static void main(String args[])
  {
    Ko_add wa = new Ko_add(30,40);
    wa.display();
  }
}

class Ko_add extends Oya_add
{
  int a,b;

  Ko_add()
  {
    this(10,20);
  }

  Ko_add(int a,int b)
  {
    super(a+10,b+10);
    this.a = a;
    this.b = b;
  }

  int Add()
  {
    return this.a+this.b;
  }

  void display()
  {
    System.out.println("Ko_add result="+this.Add());
    System.out.println("Oya_add result="+super.Add());
  }
}

class Oya_add
{
  int a,b;
  Oya_add (int a,int b)
  {
    this.a = a;
    this.b = b;
  }

  int Add()
  {
    return this.a+this.b;
  }

  
}1