package com.casa.repository;

import com.casa.model.Tbfintxchecklist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by saoDG on 5/26/2018.
 */
@Repository
public interface TbfintxchecklistJPARepository extends JpaRepository<Tbfintxchecklist, Long> {

    Tbfintxchecklist save(Tbfintxchecklist tbfintxchecklist);

    List<Tbfintxchecklist> save(List<Tbfintxchecklist> data);
}
