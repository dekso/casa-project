package com.casa.repository;

import com.casa.model.Tbdeposit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by saoDG on 5/16/2018.
 */
@Repository
public interface TbdepositJPARepository extends JpaRepository<Tbdeposit, Long> {

    Integer countByAccountNo(String acctno);
    Integer countByAccountNoOrAccountNo(String acctno1, String acctno2);
    Tbdeposit save(Tbdeposit tbdeposit);
    List<Tbdeposit> getAllByProductCodeAndAccountStatus(String productgroup, Integer acctstat);
    List<Tbdeposit> getAllByAccountNoAndProductCodeAndAccountStatus(String accountno, String productgroup, Integer acctstat);
    Tbdeposit getByAccountNo(String accountno);
    Tbdeposit findByAccountNo(String accountno);

    @Query("SELECT accountbalance-(floatamount+placeholdamt) FROM Tbdeposit WHERE accountno=?1")
    BigDecimal getBalance(String accountno);

    @Query("SELECT dep FROM Tbdeposit dep WHERE dep.accountNo=?1")
    Tbdeposit getByAccountNo1(String accountno);
//  Path Join Required
//    @Query("SELECT mat.currency FROM Tbdeposit dep " +
//            "JOIN Tbprodmatrix mat ON dep.productCode=mat.prodgroup " +
//            "AND dep.subProductCode = mat.prodcode WHERE dep.accountNo=:acctno")
//    String getCurrency(@Param("acctno") String acctno);

}
