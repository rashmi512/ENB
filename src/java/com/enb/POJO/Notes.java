package com.enb.POJO;
// Generated Aug 9, 2013 11:21:42 AM by Hibernate Tools 3.2.1.GA



/**
 * Notes generated by hbm2java
 */
public class Notes  implements java.io.Serializable {


     private Integer id;
     private Enbdesc enbdesc;
     private byte[] notes;

    public Notes() {
    }

    public Notes(Enbdesc enbdesc, byte[] notes) {
       this.enbdesc = enbdesc;
       this.notes = notes;
    }
   
    public Integer getId() {
        return this.id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    public Enbdesc getEnbdesc() {
        return this.enbdesc;
    }
    
    public void setEnbdesc(Enbdesc enbdesc) {
        this.enbdesc = enbdesc;
    }
    public byte[] getNotes() {
        return this.notes;
    }
    
    public void setNotes(byte[] notes) {
        this.notes = notes;
    }




}


