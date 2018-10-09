package com.casa.repository;

import com.casa.model.Tbmctxjrnl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by saoDG on 9/10/2018.
 */
@Repository
public interface TbmctxjrnlJPARepository extends JpaRepository<Tbmctxjrnl, Integer> {

    Tbmctxjrnl save(Tbmctxjrnl tbmctxjrnl);
    Integer countByMcchecknoAndIssuingbrAndTxstatus(String mccheckno, String issuingbr, Integer status);
}
