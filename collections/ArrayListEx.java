package collections;

import java.util.*;

public class ArrayListEx {


    public static void main(String[] args)
    {

        List<String> lst = new ArrayList<String>();



        lst.add("Abhi");  // new Integer(80) -- autoboxing - box the primitve into object type
        lst.add("Kunal");

    //    lst.add("java");
        lst.add("Rohit");
        lst.add("Ruturaj");


         System.out.println(lst);   //lst.toString();

         System.out.println(lst.size());

         String s = lst.get(0); //  new Integer(100).intvalue() -- auto-unboxing - unbox Integer object to its primitive value
         System.out.println("Name at index position 0:"+s);

         System.out.println(lst); 
         System.out.println(lst.size());

          lst.remove(0);

          System.out.println(lst);   
          System.out.println(lst.size());

          lst.set(0,"John");
          System.out.println(lst); 
          System.out.println(lst.size());


    }
 
}
