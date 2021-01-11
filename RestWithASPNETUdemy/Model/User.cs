using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestWithASPNETUdemy.Model
{
    [Table("users")]
    public class User
    {
        [Key]
        [Column("id")]
        public long Id { get; set; }
        [Column("user_name")]
        public long UserName { get; set; }
        [Column("full_name")]
        public long FullName { get; set; }
        [Column("password")]
        public long Password { get; set; }
        [Column("refresh_token")]
        public long RefreshToken { get; set; }
        [Column("refresh_token_expiry_time")]
        public DateTime RefreshTokenExpiryTime { get; set; }
    }
}