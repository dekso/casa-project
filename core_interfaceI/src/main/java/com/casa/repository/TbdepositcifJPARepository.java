package com.casa.repository;

import com.casa.model.Tbdepositcif;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by saoDG on 5/27/2018.
 */
@Repository
public interface TbdepositcifJPARepository extends JpaRepository<Tbdepositcif, Long> {

    Tbdepositcif save(Tbdepositcif tbdepositcif);
    List<Tbdepositcif> getAllByAccountno(String accoutno);
}
