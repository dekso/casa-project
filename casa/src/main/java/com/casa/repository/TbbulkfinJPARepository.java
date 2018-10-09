package com.casa.repository;

import com.casa.model.Tbbulkfin;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by saoDG on 9/18/2018.
 */
public interface TbbulkfinJPARepository extends JpaRepository<Tbbulkfin, Integer> {

    Tbbulkfin save(Tbbulkfin tbbulkfin);
}
