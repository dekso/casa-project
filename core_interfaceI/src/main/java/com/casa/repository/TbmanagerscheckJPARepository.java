package com.casa.repository;

import com.casa.model.Tbmanagerscheck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by saoDG on 9/10/2018.
 */
@Repository
public interface TbmanagerscheckJPARepository extends JpaRepository<Tbmanagerscheck, Integer> {

    Tbmanagerscheck save(Tbmanagerscheck tbmanagerscheck);
    Integer countByMcchecknoAndIssuingbrAndStatus(String mccheckno, String issuingbr, Integer status);
//    countByMcchecknoAndIssuingbrAnAndStatus
}
