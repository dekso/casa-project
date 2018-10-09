package com.casa.repository;

import com.casa.model.Tbprodmatrix;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Created by saoDG on 6/19/2018.
 */
@Repository
public interface TbprodmatrixJPARepository extends JpaRepository<Tbprodmatrix, Long> {

    Tbprodmatrix getByProdgroupAndProdcode(String prodgroup, String prodcode);

    @Query("SELECT ataind FROM Tbprodmatrix WHERE prodgroup=?1 AND prodcode=?2")
    Boolean getATAInd(String prodgroup, String prodcode);
}
