package com.casa.repository;

import com.casa.form.util.SampleForm;
import com.casa.model.Tbcheckbook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by saoDG on 6/6/2018.
 */
public interface TbcheckbookJPARepository extends JpaRepository<Tbcheckbook, Long> {

    Integer countByCheckbkaccountnoAndCheckbookno(String checkbkaccountno, String checkbookno);
    Tbcheckbook save(Tbcheckbook tbcheckbook);
    @Query(value ="select top 1 * from TBCHECKBOOK where checkbkaccountno =:acctno and endchkno>=:checkno order by id desc" ,nativeQuery = true)
    Tbcheckbook  findTopByCheckbkaccountnoAndEndchknoGreaterThanEqual(@Param("acctno") String checkbkaccountno
            ,@Param("checkno") int startcheckno);
    Integer countByCheckbookno(String checkbookno);
//    @Query("SELECT chk, chk.tbdeposit FROM Tbcheckbook chk INNER JOIN chk.tbdeposit WHERE checkbkaccountno=?1")
//    List<Tbcheckbook> getAllByCheckbkaccountno(String accountno);

}
