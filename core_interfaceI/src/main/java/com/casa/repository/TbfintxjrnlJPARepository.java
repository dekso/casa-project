package com.casa.repository;

import com.casa.model.Tbdepositcif;
import com.casa.model.Tbfintxjrnl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by saoDG on 5/15/2018.
 */
@Repository
public interface TbfintxjrnlJPARepository extends JpaRepository<Tbfintxjrnl, Long> {

    Tbfintxjrnl save(Tbfintxjrnl tbfintxjrnl);
    Integer countByTxref(String txref);
    Tbfintxjrnl findByTxrefmain(String txrefmain);

}
