package com.casa.repository;

import com.casa.model.Tbholdamtcheck;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by saoDG on 6/4/2018.
 */
public interface TbholdamtcheckJPARepository extends JpaRepository<Tbholdamtcheck, Long> {

    Tbholdamtcheck save(Tbholdamtcheck data);
}
