package com.enb.POJO;
// Generated Aug 22, 2013 12:32:00 AM by Hibernate Tools 3.2.1.GA


import java.util.Date;

/**
 * UserlogId generated by hbm2java
 */
public class UserlogId  implements java.io.Serializable {


     private int uid;
     private Date logDt;

    public UserlogId() {
    }

    public UserlogId(int uid, Date logDt) {
       this.uid = uid;
       this.logDt = logDt;
    }
   
    public int getUid() {
        return this.uid;
    }
    
    public void setUid(int uid) {
        this.uid = uid;
    }
    public Date getLogDt() {
        return this.logDt;
    }
    
    public void setLogDt(Date logDt) {
        this.logDt = logDt;
    }


   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof UserlogId) ) return false;
		 UserlogId castOther = ( UserlogId ) other; 
         
		 return (this.getUid()==castOther.getUid())
 && ( (this.getLogDt()==castOther.getLogDt()) || ( this.getLogDt()!=null && castOther.getLogDt()!=null && this.getLogDt().equals(castOther.getLogDt()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + this.getUid();
         result = 37 * result + ( getLogDt() == null ? 0 : this.getLogDt().hashCode() );
         return result;
   }   


}


