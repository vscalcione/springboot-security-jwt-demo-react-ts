package it.vscalcione.springboot.securitydemo.models;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name = "AUTH_AUTHORITY")
public class Authority implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ROLE_CODE")
    private String roleCode;

    @Column(name = "ROLE_DESCRIPTION")
    private String roleDescription;

    @Override
    public String getAuthority() {
        return roleCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public String getRoleDescription() {
        return roleDescription;
    }

    public void setRoleDescription(String roleDescription) {
        this.roleDescription = roleDescription;
    }

    @Override
    public String toString() {
        return "Authority{" +
                "id=" + id +
                ", roleCode='" + roleCode + '\'' +
                ", roleDescription='" + roleDescription + '\'' +
                '}';
    }
}
